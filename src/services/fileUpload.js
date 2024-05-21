import axios from "axios";

export default {
    uploadFile,
}

async function uploadFile(path, file) {
    let url = process.env.REACT_APP_FILE_UPLOAD_SERVICE_URL + "/uploadFile";
    let formData = new FormData();
    formData.append("uploadedFile", file);
    formData.append("path", path);
    const config = {
        headers: {
            "content-type": "multipart/form-data",
        },
    };
    return axios.post(url, formData, config)
        .then((data) => {
            if (!data || !data.data || !data.data.responseData || !data.data.success) {
                return Promise.reject()
            }
            return Promise.resolve(data.data.responseData)
        })
        .catch((err) => {
            return Promise.reject(err)

        });
};