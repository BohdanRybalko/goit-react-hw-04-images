const apiKey = '41213027-c6be3d4375fb01bb774365854'; 
const fetchData = async (query, page) => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};

export { fetchData };
