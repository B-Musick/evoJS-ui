import type { Sequence } from './types';
import * as constants from '../lib/constants';

export default function multiFastaParser (content: string) : Fasta[] {
    const splitContent = splitFastas(content);
    const fastas = <Fasta[]>[];

    splitContent.forEach(fasta=>{
        fastas.push(parseFasta(fasta));
    })

    return fastas;
}

function parseFasta (fasta: string) : Fasta {
    const splitFasta = fasta.split('\n');

    const definition = splitFasta.shift();
    const sequence = splitFasta.join('');
    const seq_id = extractSeqID(definition);
    const accession = extractAccession(definition);
    const locus = extractLocus(definition);

    const newFasta : Fasta = {definition, seq_id, accession, locus, sequence}

    return newFasta;
}

/**
 * Split a string with mutliple fastas into the individual fasta sections
 * @param content 
 * @returns 
 */
function splitFastas(content: string){
    return content
        .split('>')
        .filter(val => val != "" )
        .map(val => val.trim());
}

/**
 * Take the definition line of the fasta and return 
 * @param definition_line 
 * @returns 
 */
function extractSeqID(definition_line:string){
    return definition_line.split(' ').slice(0, 1)[0];
}

function extractLocus(definition_line:string){
    return definition_line.split(',')[1].trim();
}

function extractAccession(definition_line:string){
    return definition_line.split(',')[0].split(' ').slice(1).join(' ');
}

export function apiUri (key: string): string {
    const uri = constants.API_BASE + key
  
    return uri
  }