let nameBook = prompt(`Moi ban nhap vao ten sach:`);
let yearBook = +prompt(`Moi ban nhap vao nam xuat ban:`);
let currentYear = +prompt(`Moi ban nhap vao nam hien tai:`);
let ageBook = currentYear - yearBook;
console.log(`Sach:${nameBook}`);
console.log(`Nam xuat ban:${yearBook}`);
console.log(`Tuoi cua sach:${ageBook} nam`);
