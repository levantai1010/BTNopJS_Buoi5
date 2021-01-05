/**
 * Chương trình: QUẢN LÝ TUYỂN SINH
 * Người tạo: Lê Văn Tài
 * Ngày tạo: 02/01/2021
 * Version: 1.0
 */
// Tạo hàm helper
function GetEle(ele) {
    return document.getElementById(ele);
}
// Tạo hàm TinhDiem()
function tinhDiem() {
    // Lấy giá trị người dùng nhập vào từ bàn phím
    var layDiemMonThuNhat = parseInt(GetEle('monThuNhat').value);
    var layDiemMonThuHai = parseInt(GetEle('monThuHai').value);
    var layDiemMonThuBa = parseInt(GetEle('monThuBa').value);
    var layKVUuTien = GetEle('khuVucUuTien').value.toUpperCase();
    var layDTUuTien = parseInt(GetEle('doiTuongUuTien').value);
    var layDiemChuan = parseInt(GetEle('diemChuan').value);
    // Gọi hàm TinhTongDieem() đồng thời gán kết quả trả vè cho biến tonDiem
    var tongDiem = tinhTongDiem(layDiemMonThuNhat, layDiemMonThuHai, layDiemMonThuBa, layKVUuTien, layDTUuTien);
    // Kiểm tra nếu tongDiem >= layDiemChuan và không có môn nào 0 điểm
    if (tongDiem >= layDiemChuan && (layDiemMonThuNhat * layDiemMonThuHai * layDiemMonThuBa) != 0) {
        // In ra thông bào thí sinh này đậu vơi điểm số = tongDiem
        GetEle('spanKetQua').innerHTML = "Thí sinh này đậu với tổng điểm là: " + tongDiem;
    } else {// Ngược lại nếu tongDiem < layDiemChuan hoặc  có môn nào 0 điểm
        // In ra thông bào thí sinh này rớt vơi điểm số = tongDiem
        GetEle('spanKetQua').innerHTML = "Thí sinh này rớt với tổng điểm là: " + tongDiem;
    }
    GetEle('theFooter').className = "card-footer d-block";


}

function tinhTongDiem(a, b, c, layKVUuTien, layDTUuTien) {
    switch (layKVUuTien) {
        case 'A':
            var diemKVUuTien = 2;
            break;
        case 'B':
            var diemKVUuTien = 1;
            break;
        case 'C':
            var diemKVUuTien = 0.5;
            break;

        default:
            var diemKVUuTien = 0;
            break;
    }
    switch (layDTUuTien) {
        case 1:
            var diemDTUuTien = 2.5;
            break;
        case 2:
            var diemDTUuTien = 1.5;
            break;
        case 3:
            var diemDTUuTien = 1;
            break;

        default:
            var diemDTUuTien = 0;
            break;
    }
    return a + b + c + diemKVUuTien + diemDTUuTien;
}