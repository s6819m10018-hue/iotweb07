// Operator 
// 1.Arithmethic Operator + - * / % ** 
console.log (10+3)
console.log (10-3)
console.log (10*3)
console.log (10/3)
console.log (10%3)
console.log (10**3)
console.log ('++++++++++++++++++++++++++++++++++++++')
// Comparison Operator == === != !== > < >= <=
// เปรียบเทียบได้ทั้งตัวเลข / ข้อความ
// ตัวเลขน้อยกว่าตัวอักษร, ตัวใหญ่ น้อยกว่า ตัวมาทีหลัง
console.log("Sombat" < "Somjai") //true 
console.log("sau" >= "SAU") //true
console.log('Io5T' <= 'I37') //False
console.log('5' == 5) //true
console.log('5' === 5) // false
console.log ("+++++++++++++++++++++++++")
// Logical Operator && || !
console.log(!true)
console.log(!false)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log(true || true)
console.log(false || true)
console.log(true || false)
console.log(false || false)
// Increment ++ / Decrement Operator --
let a = 10, b = 100
console.log(++a)
console.log(--b)
// Ternary Operator __ ? __ : __ ให้ 10 เพราะเห็นบ่อย 
// ตรวจสอบหน้าเครื่องหมาย ? หากได้จริง ? หากเท็จได้หลัง : 
let score = 75
console.log(score >= 50 ? "Pass" : "Not Pass")
// Assignment Operator = += -= *= /= %= **=
// Nullish Coalesing Operator && ให้ 3 เพราะกลัวสับสนกับ Logical &&
let x = 30
let y = null
console.log(x && "WoW")
console.log(y && "Hi....")
