const fetchStories = async () => {
    const data = await fetch(`${process.env.REACT_APP_API_URL}/beststories.json/`);
    const storiesList = await data.json();
    return storiesList;
};

const fetchStory = async (storyId) => {
    const data = await fetch(`${process.env.REACT_APP_API_URL}/item/${storyId}.json`);
    const storyData = await data.json();
    return storyData;
};

const api = {
    fetchStories,
    fetchStory,
};

export default api;
