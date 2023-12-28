//เรียกข้อมูล
const fetchData = async (fetchDataURL, fetchDataBody, setDatas) => {
  console.log("fetchDataBody: ", fetchDataBody);
  //console.log("fetchData: ", fetchDataURL, fetchDataBody, setDatas);
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
