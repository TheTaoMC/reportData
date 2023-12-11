//addData
const addData = async (addDataURL, addDataBody) => {
  try {
    //ตรวจสอบ

    // ทำ HTTP POST request ไปยัง URL ที่กำหนด
    const response = await fetch(addDataURL, addDataBody);

    // ตรวจสอบว่าการเชื่อมต่อกับเซิร์ฟเวอร์เป็นไปตามปกติหรือไม่
    if (!response.ok) {
      // หากไม่ปกติ ให้ throw ข้อผิดพลาด
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // สมมติว่าเซิร์ฟเวอร์ตอบกลับด้วยข้อมูลหลังจากการลบ
    const data = await response.json();
    await console.log(data);
    await setSelectedlist(null);
    await fetchdata();
    return data;

    // ประมวลผลข้อมูลตามที่ต้องการ เช่น อัปเดต state หรือ UI
    //await setWeightDatas(data);

    // ล็อกข้อมูลที่ได้จากเซิร์ฟเวอร์
    // console.log("ข้อมูลจากเซิร์ฟเวอร์:", data);
  } catch (error) {
    // ถ้ามีข้อผิดพลาดในขณะทำงาน ให้ล็อกไว้
    console.error("เกิดข้อผิดพลาดในการลบข้อมูล:", error);
  }
};

export default addData;
