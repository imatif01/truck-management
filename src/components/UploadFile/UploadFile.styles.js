import styled from 'styled-components';

export const StyledUploadFile = styled.div`
  width: 100%;
  margin-bottom: ${({ $noLabelMargin }) => ($noLabelMargin ? '0' : '20px')};

  .label-text {
    display: block;
    margin-bottom: ${({ $noLabelMargin }) => ($noLabelMargin ? '0' : '8px')};
  }
  .labelButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    overflow: hidden;
    cursor: pointer;
    padding: 10px;
    background: ${({ $bg }) => ($bg ? 'var(--white)' : 'var(--gray)')};
    border-radius: 8px;
    border: 1px solid var(--border-color);

    .upload-text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      text-align: center;
      font-size: 12px;
      line-height: 16px;
      font-weight: 300;
      padding: 10px;
      border: 1px dashed var(--secondary);
      border-radius: 10px;

      .icon-img {
        display: block;
        width: 50px;
        height: auto;
        margin: 0 auto;
      }

      .text-lg {
        display: block;
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        /* margin: 0 0 8px; */
      }

      .text {
        display: block;
        max-width: 220px;
        margin: 0 auto;
      }
    }
  }

  input {
    display: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  .uploaded-file-name {
    font-weight: 600;
  }
`;

export const StyledBtn = styled.label``;
export const FileUploadBox = styled.div`
  background: var(--bg-primary);
  border-radius: 20px;
  display: flex;
  position: relative;
  z-index: 10;
  height: 120px;
  width: 120px;
  flex-direction: column;
  justify-content: center;
`;

export const FileInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
`;

export const FileSize = styled.span`
  border-radius: 3px;
  margin-bottom: 0.5em;
  justify-content: center;
  display: flex;
`;

export const FileName = styled.span`
  border-radius: 3px;
  font-size: 12px;
  margin-bottom: 0.5em;
`;

export const ProgressBarHolder = styled.div`
  bottom: 14px;
  position: absolute;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

export const RemoveBtn = styled.div`
  height: 23px;
  position: absolute;
  right: 6px;
  top: 6px;
  width: 23px;
  svg {
    fill: var(--danger);
  }
  &:hover {
    opacity: 0.8;
  }
`;
