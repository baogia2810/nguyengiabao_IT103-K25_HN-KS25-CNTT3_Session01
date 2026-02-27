let bookName = prompt(`Moi ban nhap vao ten sach:`);
let bookId = +prompt(`Moi ban nhap vao so thu tu sach:`);
let normalizedName = bookName.trim().toLocaleUpperCase();
let bookCode = `LIB-${normalizedName}-${bookId}`;
console.log(`Ten sach goc la:${bookName}`);
console.log(`Ma sach sau chuan hoa:${bookCode}`);
