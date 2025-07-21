import { APP_INITIALIZER, NgModule } from '@angular/core'; // <-- Importa APP_INITIALIZER
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// 1. Importamos el servicio que queremos inicializar
import { LocalDatabaseService } from './core/services/local-database.service';

// 2. Esta es la función "fábrica" que le dice a Angular QUÉ ejecutar
//    Le pedimos a Angular que nos dé una instancia del LocalDatabaseService
export function initializeDatabaseFactory(databaseService: LocalDatabaseService): () => Promise<void> {
  return () => databaseService.init();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  // 3. AQUÍ ESTÁ LA CONFIGURACIÓN MÁS IMPORTANTE
  providers: [
    {
      // Le decimos a Angular que provea un token de inicialización
      provide: APP_INITIALIZER,
      // Le decimos que use nuestra función fábrica para saber qué hacer
      useFactory: initializeDatabaseFactory,
      // Le decimos que nuestra función necesita una instancia del LocalDatabaseService para trabajar
      deps: [LocalDatabaseService],
      // Le decimos que puede haber múltiples inicializadores (esto es obligatorio)
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }