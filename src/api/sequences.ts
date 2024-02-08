import axios, { AxiosError } from 'axios';
import type { Sequence, ApiError } from '../lib/types';
import { Err, Ok, Result } from 'ts-results'
import { apiUri } from '@/lib/helpers';

const errorTitle = 'Sequences API';

function blank (): Sequence {
    return {
        title: '',
        description: '',
        seq_id: '',
        accession: '',
        locus: '',
        sequence: ''
    } as Sequence
}

async function get (id: number): Promise<Result<Sequence, ApiError>> {
    try {
        const apiResponse = await axios.get(apiUri(`sequences/${id}`))
        return Ok(apiResponse.data as Sequence)
    } catch (e) {
    //   return Err(processApiError(e as AxiosError, errorTitle, `Error retrieving customer id: ${id}`))
        const validationErrors: ApiError = { message: '', errors: [] }
        return Err(validationErrors);
    }
}

const sequencesApi = {
blank,
get,
}
  
export default sequencesApi