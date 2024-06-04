import * as schema from 'drizzle/schema'
import { drizzle } from 'drizzle-orm/postgres-js';
// import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { eq, and } from 'drizzle-orm';
import postgres from 'postgres';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import { UsersTable, ReportsTable } from 'drizzle/schema';

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle
import { currentUser } from '@clerk/nextjs/dist/types/server';
import { currentUser } from '@clerk/nextjs/server';

interface NewUserFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  clerkId: string;
}
interface NewReportFormData {
  clerkUserId: string;
  reportName: string;
  airScore: number;
  animalsScore: number;
  fireScore: number;
  insideOutsideScore: number;
  naturaLightScore: number;
  naturalMaterialsScore: number;
  plantsScore: number;
  viewsVistasScore: number;
  waterScore: number;
  animalMotifsScore: number;
  areaOfEmphasisScore: number;
  biomimicryScore: number;
  botanicalMotifsScore: number;
  complementaryContrastsScore: number;
  compositionBalanceScore: number;
  movementScore: number;
  natureBasedPatternsScore: number;
  sensoryRichnessScore: number;
  spatialVarietyScore: number;
  warmLightScore: number;
  culturalConnectionScore: number;
  engagementScore: number;
  enticementAndDiscoveryScore: number;
  environmentalConnectionScore: number;
  historicConnectionScore: number;
  prospectAndRefugeScore: number;
  spiritOfPlaceScore: number;
  stewardshipScore: number;
}

const createNewReport = (): NewReportFormData => ({
  reportName: '',
  airScore: 0,
  animalsScore: 0,
  fireScore: 0,
  insideOutsideScore: 0,
  naturaLightScore: 0,
  naturalMaterialsScore: 0,
  plantsScore: 0,
  viewsVistasScore: 0,
  waterScore: 0,
  animalMotifsScore: 0,
  areaOfEmphasisScore: 0,
  biomimicryScore: 0,
  botanicalMotifsScore: 0,
  complementaryContrastsScore: 0,
  compositionBalanceScore: 0,
  movementScore: 0,
  natureBasedPatternsScore: 0,
  sensoryRichnessScore: 0,
  spatialVarietyScore: 0,
  warmLightScore: 0,
  culturalConnectionScore: 0,
  engagementScore: 0,
  enticementAndDiscoveryScore: 0,
  environmentalConnectionScore: 0,
  historicConnectionScore: 0,
  prospectAndRefugeScore: 0,
  spiritOfPlaceScore: 0,
  stewardshipScore: 0
});

const client = postgres(`${process.env.POSTGRES_URL!}`, { max: 1 });
const db = drizzle(client, { schema })

export async function getUser(email: string) {
  return await db.select().from(UsersTable).where(eq(UsersTable.emailAddress, email));
}

export async function createUser(newUserFormData: NewUserFormData) {
  const {
    email,
    password,
    firstName,
    lastName,
    clerkId,
  } = newUserFormData;
  try {
    let salt = genSaltSync(10);
    let hash = hashSync(password, salt);
  
    return await db.insert(UsersTable).values({
      emailAddress: email,
      password: hash,
      firstName,
      lastName,
      clerkId,
    });
  } catch (error) {
    console.log(error)
  }
}

export async function getReports(userClerkId: string) {
  return await db.select().from(ReportsTable).where(eq(ReportsTable.clerkUserId, userClerkId))
}

export async function getReport(userClerkId: string, reportId: number) {
  return await db.select().from(ReportsTable).where(
    and(
      eq(ReportsTable.clerkUserId, userClerkId),
      eq(ReportsTable.id, reportId)
    )
  )
}

function isScoreKey(key: string): key is keyof Omit<NewReportFormData, 'reportName'> {
  return [
    'airScore', 'animalsScore', 'fireScore', 'insideOutsideScore', 'naturaLightScore', 'naturalMaterialsScore',
    'plantsScore', 'viewsVistasScore', 'waterScore', 'animalMotifsScore', 'areaOfEmphasisScore', 'biomimicryScore',
    'botanicalMotifsScore', 'complementaryContrastsScore', 'compositionBalanceScore', 'movementScore', 'natureBasedPatternsScore',
    'sensoryRichnessScore', 'spatialVarietyScore', 'warmLightScore', 'culturalConnectionScore', 'engagementScore',
    'enticementAndDiscoveryScore', 'environmentalConnectionScore', 'historicConnectionScore', 'prospectAndRefugeScore',
    'spiritOfPlaceScore', 'stewardshipScore'
  ].includes(key);
}


export async function createReport(formData: FormData) {
  try {
    const user = await currentUser()

    const newReport = createNewReport()
    if (user) {
      for (const [key, value] of formData.entries()) {
        if (isScoreKey(key)) {
          newReport[key] = parseFloat(value as string);
        } else if (key in newReport) {
          (newReport as any)[key] = value as string;
        }
      }
      return await db.insert(ReportsTable).values({
        clerkUserId: user.id,
        ...newReport as NewReportFormData
      });
    }
  } catch (error) {
    console.log(error)
  }
}
