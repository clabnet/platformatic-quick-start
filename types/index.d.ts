import { Bom } from './Bom'
import { Drawing } from './Drawing'
import { Movie } from './Movie'
import { Note } from './Note'
import { PrismaMigration } from './PrismaMigration'
import { Quote } from './Quote'
  
interface EntityTypes  {
  Bom: Bom
    Drawing: Drawing
    Movie: Movie
    Note: Note
    PrismaMigration: PrismaMigration
    Quote: Quote
}
  
export { EntityTypes, Bom, Drawing, Movie, Note, PrismaMigration, Quote }