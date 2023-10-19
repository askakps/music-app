const fetchData = () => {
  const getPosts = async () => {
    try {
      const response = await fetch("/url");
      const responseResult = await response.json();
      return responseResult;
    } catch {
      console.log("fetch error");
    }
  };

  return {
    getPosts,
  };
};

export default fetchData;
