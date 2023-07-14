import "../Styles/ModalStyles.css";

function Modal() {
    return (
      <>
        <div className="modal-container">
          <div className="modal">
            <form>
              <div className="form-group">
                <label htmlFor="Code">Course Code</label>
                <input name="Code" />
              </div>
              <div className="form-group">
                <label htmlFor="Course">Course Name</label>
                <input name="Course" />
              </div>
              <div className="form-group">
                <label htmlFor="Credit">Credit</label>
                <input name="Credit" />
              </div>
              <div className="form-group">
                <label htmlFor="Core">Core/Technical</label>
                <select name="Core">
                  <option value="Core">Core</option>
                  <option value="Technical">Technical</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Coordinator">Coordinator</label>
                <input name="Coordinator" />
              </div>

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
}

export default Modal;