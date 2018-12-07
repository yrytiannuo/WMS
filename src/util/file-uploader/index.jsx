import React from 'react';
import FileUpload from './react-fileupload.jsx';

class FileUploader extends React.Component{
  render(){
    /*set properties*/
    const options={
      baseUrl:'/manage/product/upload.do',
      fileFieldName: 'upload_file',
      chooseAndUpload: true,
      dataType: 'json',
      uploadSuccess: (res) => {
        this.props.onSuccess(res.data)
      },
      uploadError: (err) => {
        this.props.onError(err.message || '长传图片失败')
      }
    }
    /*Use FileUpload with options*/
    /*Set two dom with ref*/
    return (
      <FileUpload options={options}>
        <button ref="chooseAndUpload">请选择图片</button>
      </FileUpload>
    )	        
  }
}

export default FileUploader;