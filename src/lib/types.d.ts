export interface Sequence{
    title: string,
    description: string,
    seq_id: string,
    accession: string,
    locus: string,
    sequence: string
}

// Easier to consume list of validation errors from a Http 422 response
export interface ApiError {
    message: string
    errors: string[]
  }