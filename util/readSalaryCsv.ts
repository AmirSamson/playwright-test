import fs from 'fs'; //The file system which enables reading and writing files 
import path from 'path'; // the Path handler for different OS (like on CI runs)
import {parse} from 'csv-parse/sync'; // parses the CSV file easily

export type SalaryInput = {  //defining the CSV file row and columns in a "Type".
  role: string; 
  country: string;
};

export function readSalaryCsv(filePath: string): SalaryInput[] {
  const absolutePath = path.resolve(filePath);
  const fileContent = fs.readFileSync(absolutePath);

  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as SalaryInput[];

  return records;
}