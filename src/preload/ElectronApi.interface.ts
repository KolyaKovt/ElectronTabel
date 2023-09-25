// Custom APIs for renderer
import { Supplier } from '../main/entities/Supplier.entity'

export interface ElectronAPI {
  getSuppliers: (input: string) => Promise<Supplier[]>
}
