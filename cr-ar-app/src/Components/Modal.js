import "../Styles/ModalStyles.css";

function Modal() {
    return (
      <>
        <div className="modal-container">
          <div className="modal">
            <form>
              <div className="form-group">
                <label htmlFor="Page">Page</label>
                <input name="Page" />
              </div>
              <div className="form-group">
                <label htmlFor="Description">Description</label>
                <input name="Description" />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select name="status">
                  <option value="Core">Core</option>
                  <option value="Technical">Technical</option>
                </select>
              </div>
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </>
    );
}

export default Modal;