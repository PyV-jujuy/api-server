export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export default interface Database {
  public: {
    Tables: {
      affiliates: {
        Row: {
          dni: number
          isAffiliated: boolean
        }
        Insert: {
          dni: number
          isAffiliated?: boolean
        }
        Update: {
          dni?: number
          isAffiliated?: boolean
        }
        Relationships: []
      }
      padronjujuy2023: {
        Row: {
          apellido: string | null
          circuito_codigo: string | null
          circuito_nombre: string | null
          clase: number | null
          direccion: string | null
          domicilio: string | null
          escuela: string | null
          lugar: string | null
          matricula: number
          municip_codigo: string | null
          municip_nombre: string | null
          numero: number | null
          orden: number | null
          padronmf_nombre: string | null
          seccion_codigo: number | null
          seccion_nombre: string | null
          sexo: string | null
          tipodoc: string | null
        }
        Insert: {
          apellido?: string | null
          circuito_codigo?: string | null
          circuito_nombre?: string | null
          clase?: number | null
          direccion?: string | null
          domicilio?: string | null
          escuela?: string | null
          lugar?: string | null
          matricula: number
          municip_codigo?: string | null
          municip_nombre?: string | null
          numero?: number | null
          orden?: number | null
          padronmf_nombre?: string | null
          seccion_codigo?: number | null
          seccion_nombre?: string | null
          sexo?: string | null
          tipodoc?: string | null
        }
        Update: {
          apellido?: string | null
          circuito_codigo?: string | null
          circuito_nombre?: string | null
          clase?: number | null
          direccion?: string | null
          domicilio?: string | null
          escuela?: string | null
          lugar?: string | null
          matricula?: number
          municip_codigo?: string | null
          municip_nombre?: string | null
          numero?: number | null
          orden?: number | null
          padronmf_nombre?: string | null
          seccion_codigo?: number | null
          seccion_nombre?: string | null
          sexo?: string | null
          tipodoc?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
