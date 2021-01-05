/**
 * Chương trình: TÍNH TIỀN CÁP
 * Người tạo: Lê Văn Tài
 * Ngày tạo: 02/01/2021
 * Version: 1.0
 */

// Khai báo các hằng số
const PHI_XU_LY_HOA_DON_ND = 4.5;
const PHI_DICH_VU_CO_BAN_ND = 20.5;
const PHI_THUE_KENH_CAO_CAP_ND = 7.5;

const PHI_XU_LY_HOA_DON_DN = 15;
const PHI_DICH_VU_CO_BAN_DN = 75;
const PHI_DICH_VU_CO_BAN_DN_KN_THEM = 5;
const PHI_THUE_KENH_CAO_CAP_DN = 50;
// Tạo hàm helper 
function getEle(ele) {
    return document.getElementById(ele);
}
// Lấy giá trị người dùng nhập vào, tùy vào maKH mà sẽ hiển thị form nhập liệu tiếp theo
document.getElementById('btnFormNhapLieu').addEventListener('click', function InFormNhapLieu() {
    var maKH = getEle('maKH').value;
    if (maKH == 1) {
        getEle('KH_NhaDan').className = "d-block";
        getEle('btnTinhTien').className = "btn btn-success d-block";
    } else if (maKH == 2) {
        getEle('KH_DoangNghiep').className = "d-block";
        getEle('btnTinhTien').className = "btn btn-success d-block";
    } else {
        getEle('theFooter').className = "card-footer text-muted d-block";
        getEle('ketQua').innerHTML = "Vui lòng nhập mã Khách Hàng hợp lệ: <br />1. Khách Hàng Nhà Dân <br />2. Khách Hàng Doanh Nghiệp";
    }
})
// Tính tiền cáp theo yêu cầu đề bài
document.getElementById('btnTinhTien').addEventListener('click', function TinhTien() {
    var maKH = getEle('maKH').value;
    if (maKH == 1) {
        var laySoTK_ND = getEle('soTK_ND').value;
        var laySoKenhCaoCap_ND = getEle('soKenhCaoCap_ND').value;
        var tongChiPhi = PHI_XU_LY_HOA_DON_ND + PHI_DICH_VU_CO_BAN_ND
            + (PHI_THUE_KENH_CAO_CAP_ND * laySoKenhCaoCap_ND);
        getEle('theFooter').className = "card-footer text-muted d-block";
        getEle('ketQua').innerHTML = "Khách Hàng có số tài khoản: " + laySoTK_ND + " <br />Tổng số tiền cáp là: " + tongChiPhi + " $";

    } else {
        var laySoTK_DN = getEle('soTK_DN').value;
        var laySoKenhCaoCap_ND = getEle('soKenhCaoCap_DN').value;
        var laySLKetNoi = getEle('soKetNoi_DN').value;
        var tongChiPhi = 0;
        if (laySLKetNoi <= 10) {
            tongChiPhi = PHI_XU_LY_HOA_DON_DN + PHI_DICH_VU_CO_BAN_DN
                + (laySoKenhCaoCap_ND * PHI_THUE_KENH_CAO_CAP_DN);
        } else {
            tongChiPhi = PHI_XU_LY_HOA_DON_DN + PHI_DICH_VU_CO_BAN_DN + ((laySLKetNoi - 10) * PHI_DICH_VU_CO_BAN_DN_KN_THEM)
                + (laySoKenhCaoCap_ND * PHI_THUE_KENH_CAO_CAP_DN);
        }
        getEle('theFooter').className = "card-footer text-muted d-block";
        getEle('ketQua').innerHTML = "Khách Hàng có số tài khoản: " + laySoTK_DN + " <br />Tổng số tiền cáp là: " + tongChiPhi + " $";
    }

})
