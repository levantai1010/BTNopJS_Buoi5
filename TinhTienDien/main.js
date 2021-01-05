/**
 * Chương trình: TÍNH TIỀN ĐIỆN
 * Người tạo: Lê Văn Tài
 * Ngày tạo: 02/01/2021
 * Version: 1.0
 */
const TIEN_50KW_DAU = 500;
const TIEN_50KW_KE = 650;
const TIEN_100KW_KE = 850;
const TIEN_150KW_KE = 1100;
const TIEN_SOKW_CON_LAI = 1300;
const MOC_50 = 50;
const MOC_100 = 100;
const MOC_150 = 150;
const MOC_200 = 200;
const MOC_350 = 350;
// Tạo hàm Helper
function GetEle(ele) {
    return document.getElementById(ele);
}
function TinhTienDien() {
    // Thay đổi đinh dạng kết quả sang VND
    const numberFormat = new Intl.NumberFormat('vi-VI', {
        style: 'currency',
        currency: 'VND',
    });
    // Lấy dữ liệu người dùng nhập vào
    var layTenKH = GetEle('tenKH').value;
    var laySoKW = parseInt(GetEle('soKW').value);
    // Gọi hàm TinhTien() để xuất kết quả ra màn hình
    var tongTien = TinhTien(laySoKW);
    GetEle('theFooter').className = "card-footer d-block";

    GetEle('spanKetQua').innerHTML = "Tên khách hàng: " + layTenKH + "<br />"
        + "Tổng tiền chi trả: " + numberFormat.format(tongTien);


}
// Tạo hàm tính tiền theo yêu cầu nghiệp vụ
function TinhTien(laySoKW) {
    if (0 < laySoKW && laySoKW <= MOC_50) {
        return laySoKW * TIEN_50KW_DAU;
    } else if (MOC_50 < laySoKW && laySoKW <= MOC_100) {
        return MOC_50 * TIEN_50KW_DAU + (laySoKW - MOC_50) * TIEN_50KW_KE;
    } else if (MOC_100 < laySoKW && laySoKW <= MOC_200) {
        return MOC_50 * TIEN_50KW_DAU + MOC_50 * TIEN_50KW_KE + (laySoKW - MOC_100) * TIEN_100KW_KE;
    } else if (MOC_200 < laySoKW && laySoKW <= MOC_350) {
        return MOC_50 * TIEN_50KW_DAU + MOC_50 * TIEN_50KW_KE + MOC_100 * TIEN_100KW_KE + (laySoKW - MOC_200) * TIEN_150KW_KE;
    } else {
        return MOC_50 * TIEN_50KW_DAU + MOC_50 * TIEN_50KW_KE + MOC_100 * TIEN_100KW_KE + MOC_150 * TIEN_150KW_KE + (laySoKW - MOC_350) * TIEN_SOKW_CON_LAI;
    }

}