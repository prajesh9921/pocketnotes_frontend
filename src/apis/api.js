import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

const GetAllGroupData = async (setLoading) => {
    try {
      setLoading(true);
      const url = `${baseUrl}/getallgroupsdata`;
      const response = await axios.get(url);
      setLoading(false);
      return response?.data;
    } catch (error) {
      setLoading(false);
      console.log(
        "error in getting your groups data",
        error?.response?.data
      );
      return error?.response?.data;
    }
  };

  const GetSingleGroupData = async (setLoading, grpid) => {
    try {
      setLoading(true);
      const url = `${baseUrl}/getsinglegroupdata/${grpid}`;
      const response = await axios.get(url);
      setLoading(false);
      return response?.data;
    } catch (error) {
      setLoading(false);
      console.log(
        "error in getting your groups data",
        error?.response?.data
      );
      return error?.response?.data;
    }
  };

  const AddNoteToGroup = async (setLoading, groupId, value) => {
    try {
      setLoading(true);
      const url = `${baseUrl}/addnotetogroup`;
      const response = await axios.post(url, {groupId: groupId, value: value});
      setLoading(false);
      return response?.data;
    } catch (error) {
      setLoading(false);
      console.log(
        "error in adding note to group",
        error?.response?.data
      );
      return error?.response?.data;
    }
  };

  const AddGroup = async (setLoading, grpName, initialLetters, color) => {
    try {
      setLoading(true);
      const url = `${baseUrl}/addgroup`;
      const response = await axios.post(url, {grpName: grpName, initialLetters: initialLetters, selectedColor: color});
      setLoading(false);
      return response?.data;
    } catch (error) {
      setLoading(false);
      console.log(
        "error in adding group",
        error?.response?.data
      );
      return error?.response?.data;
    }
  };


  export {GetAllGroupData, AddNoteToGroup, AddGroup, GetSingleGroupData}