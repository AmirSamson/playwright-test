import {test, expect} from '@playwright/test';
import { readSalaryCsv } from '../util/readSalaryCSV';

const salaryData = readSalaryCsv('data/salary-data.csv');

test.describe('Salary calculation by role and country', () => {

  for (const { role, country } of salaryData) {
    test(`Calculate salary for ${role} in ${country}`, async ({ page }) => {

      await page.goto('https://growth.deel.training/dev/salary-insights');
      await page.getByTestId('role-input').fill(role);
      await page.getByTestId('country-select').selectOption(country);
      await page.getByTestId('calculate-button').click();

      const salaryResult = page.getByTestId('salary-result');
      await expect(salaryResult).toBeVisible();
      await expect(salaryResult).not.toHaveText('');
    });
  }
});