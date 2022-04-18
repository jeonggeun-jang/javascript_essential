'use strict';

/**
 * Variable
 * - 값을 저장하는 영역
 * - 변수에 저장된 값의 재사용을 위해 사용
 * - var / let / const 타입에 변수이름을 저장한 후 대입연산자(=)를 통해 값을 저장
 *
 * Ex.
 * const isFalse = false;
 * const isTrue = true;
 *
 * - 콤마(,)를 사용하여 한줄에 여러개의 변수를 선언, 초기화 가능
 * - 세미콜론이 있는 곳까지를 한 문장으로 인식
 *
 * Ex.
 * const isFalse = false, isTrue = true;
 * const point = amount = 1_000_000;
 *
 * - 의미를 부여하여 변수 이름 작명
 */

const num = 1_000_000;
const isFalse = false, isTrue = true;

console.log(`num : ${typeof num}, ${num} / isFalse : ${typeof isFalse}, ${isFalse} / isTrue : ${typeof isTrue}, ${isTrue}`)