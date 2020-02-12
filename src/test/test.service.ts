import { Injectable } from '@nestjs/common';
import { Test } from './test.interface';

@Injectable()
export class TestService {
  private readonly test: Test[] = [
      {id: 'a', name: 'Alex', children: {child1: 'c1', child2: 'c2'}}, 
      {id: 'b', name: 'Bob', children: {child1: 'c1', child2: 'c2'}}, 
      {id: 'c', name: 'Cathy', children: {child1: 'c1', child2: 'c2'}}
    ];

  listTest(): Test[] {
    return this.test;
  }

  getTest(id: string): Test {
    return this.test.find(value => value.id === id);
  }
}

