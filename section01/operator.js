'use strict';

/**
 * 연산자
 * - JavaScript 에서의 연산자는 사전적 의미와 같음
 * - JavaScript 엔진이 해석하고 실행
 * - 실행 순서의 경우 왼쪽에서 오른쪽
 *
 * '+' 연산자
 * - 어느 한쪽이라도 평가 결과가 Number 타입이 아닐 경우 '연결'
 *
 * 숫자 변환
 * - JavaScript 의 경우 연산하기 전에 우선 숫자로 변환
 * - Undefined -> NaN
 * - Null -> 0
 * - Boolean -> true : 1 / false : 0
 * - Number -> Number
 * - String -> 값이 숫자인 경우 : Number / 숫자가 아닌 경우 : NaN
 *
 * 단항 연산자 '+' / '-'
 * - '+' 연산자의 경우 값을 Number 타입으로 변환 / Number() 기능과 같음
 * - '-' 연산자의 경우 값의 부호를 바꿈
 *
 * 동등비교 & 일치비교 연산자 (== / != / === / !==)
 * - ==의 경우 왼쪽과 오른쪽 값을 비교하지만 타입을 비교하지는 않음
 * - ===의 경우 값과 타입이 모두 같아야 true 반환
 */

const num = 1;
const str = 'str';
const add = num + str;
console.log(add);

// 다음의 경우 기댓값은 6.9인 반면 출력은 그렇지 않다. (IEEE 754 부동소수점 처리 때문)
console.log(2.3 * 3);

// 따라서 JavaScript 스펙에 따라 정확한 계산을 하기 위해서 정수타입으로 변환 필요
console.log((2.3 * 10) * 3 / 10);

console.log(1 == '1');
//console.log(1 === '1');