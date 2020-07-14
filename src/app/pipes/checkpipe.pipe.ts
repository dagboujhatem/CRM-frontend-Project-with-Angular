import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkpipe'
})
export class CheckpipePipe implements PipeTransform {

  transform(value: any[], selectedCheckboxes: any[]): any {
    if (value.length === 0 || selectedCheckboxes.length === 0 ) {
    return value;
    }
    return value.filter(item  => item.class.includes(selectedCheckboxes));
  }

}
