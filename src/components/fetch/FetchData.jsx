// ในไฟล์ fetchDataModule.js
const fetchData = async (fetchDataURL, fetchDataBody, setDatas) => {
  try {
    const response = await fetch(fetchDataURL, fetchDataBody);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    if (response.ok) {
      const data = await response.json();
      setDatas(data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default fetchData;