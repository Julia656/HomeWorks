'number' + 23 + 32
// 'number' + 23 ='number23'
//'number' + 32 = 'number2332' 

41 + 1 + 'number'
//41+1=42
//'42number'
null + 1
//null становится 0
//0+1=1
'five' + + 'two'
//+ 'two' становится NaN
//'five' + NaN = 'fiveNan'
2 && 7

+'40' + +'2';
//42 так как +'40' и +'2' являются числами
'10' - 5 === 6;
//false. Так как 10 это число, 10-5=5, 5===6 это false(Boolean)
true + false
//true=1. false=0
//1+0=1
'4px' - 3
//'4px'=NaN
'4' - 3
//'4' число
//1
'2' + 3 ** 2;
//'3' ** '2'='9'
12 / '6'
//'6' число 
//12 / '6' = '2'
23 + 42 + 'number'
//24 + 42 = '65'
//65 + 'number' = "65number"
'10' + (5 === 6);
//5 === 6 false
//'10' + false = "10false"
'number' + 15 + 3
//'number' + 15 = "number15"
//"number15" + 3 = "number153"
//№2_2
undefined + 1;
//undefined = NaN
// NaN + 1 = NaN
'true' == true
//булевое становится 1, 
//true это строка
//'true' и 1 не равны
//false
false == 'false'
//false
null == ''
//null = undefined = false
3 ** (9 / 3);
//9 / 3 = 3
//3 * 3 = 27
!!'false' == !!'true'
//
0 || '0' && 1
//
1 < 2 < 3
//1 < 2 = 'true'
//'true' < 3 = 1 < 3 = 'true'
'foo'+ + +'bar'
// + 'bar' = NaN
//'foo' + NaN = 'fooNaN'
3 ** 2 / 3;
//3 ** 2 = '9'
// 9 / 3 = '3'
1 < 2 > 3
//1 < 2 = 'true'
//true > 3 = 'true' = 1 
// 1 > 3 = 'false'

(+null == false) < 1;
// false == 0 => true
// true = 1
// false
false && true || true
// && возвращает false
//  false || true => true (|| возврощает true)
//false && true || true; // true
false && (true || true);
// || между true остаёться true
//false && true => false
//false && (true || true); // false
(+null == false) < 1 ** 5;
//+null => 0
//0 == false => true (0 и false равны)
//1 ** 5 => 1 (1 в степени 5 равняется 1)
//true < 1 => false (true равнятся 1)