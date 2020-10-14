import axios from "axios";

export default axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/http://taglobal.greenowlservice.com/ta/ext_api/cmg/incidents/get_list_by_status?appId=1&status=active&api_key=IS024AK7GUWLHYC2",
    headers: {
      // Authorization: "TE4PSCQCDSBFOD9F30OT4C1T6UUQ9G8A0fsYGbvssM0xzmrI32KewBzraBt2rwa1MBriEK02"
      // eslint-disable-next-line no-useless-concat
      // 'Authorization': 'Bearer ' + "TE4PSCQCDSBFOD9F30OT4C1T6UUQ9G8A0fsYGbvssM0xzmrI32KewBzraBt2rwa1MBriEK02",
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json'
    }
});