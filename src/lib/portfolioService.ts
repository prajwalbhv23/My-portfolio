import { supabase } from '@/lib/supabase'
import { hasSupabaseConfig } from '@/lib/env'
import {
  projects as localProjects,
  certificates as localCertificates,
  techStacks as localTechStacks,
  getProjectById as getLocalProjectById,
} from '@/data/portfolioData'

export const fetchProjects = async () => {
  if (!hasSupabaseConfig) {
    return localProjects
  }

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: true })

    if (!error && data && data.length > 0) {
      return data
    }
  } catch {
    // fall through to local data
  }

  return localProjects
}

export const fetchCertificates = async () => {
  if (!hasSupabaseConfig) {
    return localCertificates
  }

  try {
    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .order('created_at', { ascending: true })

    if (!error && data && data.length > 0) {
      return data
    }
  } catch {
    // fall through to local data
  }

  return localCertificates
}

export const fetchTechStacks = async () => {
  if (!hasSupabaseConfig) {
    return localTechStacks
  }

  try {
    const { data, error } = await supabase
      .from('tech_stack')
      .select('*')
      .order('created_at', { ascending: true })

    if (!error && data && data.length > 0) {
      return data
    }
  } catch {
    // fall through to local data
  }

  return localTechStacks
}

export const fetchProjectById = async (id: string) => {
  if (!hasSupabaseConfig) {
    return getLocalProjectById(id) || null
  }

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single()

    if (!error && data) {
      return data
    }
  } catch {
    // fall through to local data
  }

  return getLocalProjectById(id) || null
}

export { getLocalProjectById as getProjectById }
