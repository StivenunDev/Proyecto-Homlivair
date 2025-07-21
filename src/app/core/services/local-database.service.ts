import { Injectable } from '@angular/core';
import { LocalDatabase } from '../interfaces/LocalDatabase.model'; 
import { seedDatabase } from '../../mock-data/mock-data-base';

@Injectable({
  providedIn: 'root'
})
export class LocalDatabaseService {

  public db!: LocalDatabase;

  constructor() { }

  public init(): Promise<void> {
    return new Promise((resolve) => {
      console.log('[APP_INITIALIZER] Iniciando base de datos en memoria...');

      // Paso A: Creamos una nueva instancia de tu motor.
      this.db = new LocalDatabase();

      // Paso B: Llamamos a tu función para llenarla de datos.
      seedDatabase(this.db);

      console.log('[APP_INITIALIZER] ¡Base de datos lista y poblada!');
      resolve(); 
    });
  }
}