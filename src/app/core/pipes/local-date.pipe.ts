import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'localDate', standalone: true })
export class LocalDatePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    // Parse ISO date (YYYY-MM-DD) en forçant midi pour éviter les décalages UTC
    const date = new Date(value + 'T12:00:00');
    return date.toLocaleDateString(navigator.language, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }
}

