'use strict';

/**
 * Data Type (자료형)
 * - typeof 연산자를 통해 데이터 타입을 알 수 있음
 * - Number / String / Undefined / Null / Boolean / Object
 *
 * Number 타입의 특수 값
 * - NaN : Not-A-Number
 * - Infinity : 양수 무한대
 * - -Infinity : 음수 무한대
 *
 * Undefined 타입
 * - JavaScript 에서는 반드시 변수에 값이 초기화 되어야 함
 * - 따라서 변수만 선언하게 될 경우 값이 초기화되지 않았다는 의미로 Undefined 할당
 *
 * Null 타입
 * - 의도적으로 null 값을 초기화 해주어야 가능
 * - 아무것도 할당하지 않을 경우 Undefined 할당
 *
 * Object 타입
 * - {name: value} 형태
 * - name, value 하나를 Property(프로퍼티) 라고 지칭
 * - Object -> Property(프로퍼티)의 집합
 */

// 보통 다른 프로그래밍 언어는 다음의 경우 컴파일 에러 발생
const num = 1 * 'A';
console.log(`num1 : ${num}`);

// const und; -> const 타입의 경우 JavaScript 스펙에 따라 초기화가 필수
let und;
console.log(und);
und = null;
console.log(und)

