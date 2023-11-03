import type { PlatformaticApp, PlatformaticDBMixin, PlatformaticDBConfig, Entity, Entities, EntityHooks } from '@platformatic/db'
import { EntityTypes, Bom,Drawing,Movie,Note,PrismaMigration,Quote } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Bom' | 'Drawing' | 'Movie' | 'Note' | 'PrismaMigration' | 'Quote'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

interface AppEntities extends Entities {
  bom: Entity<Bom>,
    drawing: Entity<Drawing>,
    movie: Entity<Movie>,
    note: Entity<Note>,
    prismaMigration: Entity<PrismaMigration>,
    quote: Entity<Quote>,
}

interface AppEntityHooks {
  addEntityHooks(entityName: 'bom', hooks: EntityHooks<Bom>): any
    addEntityHooks(entityName: 'drawing', hooks: EntityHooks<Drawing>): any
    addEntityHooks(entityName: 'movie', hooks: EntityHooks<Movie>): any
    addEntityHooks(entityName: 'note', hooks: EntityHooks<Note>): any
    addEntityHooks(entityName: 'prismaMigration', hooks: EntityHooks<PrismaMigration>): any
    addEntityHooks(entityName: 'quote', hooks: EntityHooks<Quote>): any
}

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<PlatformaticDBConfig> &
      PlatformaticDBMixin<AppEntities> &
      AppEntityHooks
  }
}
