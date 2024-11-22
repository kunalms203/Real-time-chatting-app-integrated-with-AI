import "./detail.css";
const Detail = () => {
  return (
    <div className="detail">
      <div className="detail-user">
        <img src="./avatar.png" alt="" />
        <h2>Kunal Shinde</h2>
        <p>Hello Everyone!!!.</p>
      </div>
      <div className="detail-info">
        <div className="options">
          <div className="title">
            <span>chat settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="options">
          <div className="title">
            <span>Privacy & chat</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="options">
          <div className="title">
            <span>Shared media</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="PhotoItem">
              <div className="photodetail">
                <img
                  src="https://www.billboard.com/wp-content/uploads/2023/07/Olivia-Rodrigo-press-credit-Larissa-Hofmann-2023-billboard-1548.jpg?w=942&h=623&crop=1"
                  alt=""
                />
                <span>photo_2024</span>
              </div>
              <img src="./download.png" alt="" className="icon-down"/>
            </div>
          </div>
          <div className="photos">
            <div className="PhotoItem">
              <div className="photodetail">
                <img
                  src="https://www.billboard.com/wp-content/uploads/2023/07/Olivia-Rodrigo-press-credit-Larissa-Hofmann-2023-billboard-1548.jpg?w=942&h=623&crop=1"
                  alt=""
                />
                <span>photo_2024</span>
              </div>
              <img src="./download.png" alt="" className="icon-down"/>
            </div>
          </div>
          <div className="photos">
            <div className="PhotoItem">
              <div className="photodetail">
                <img
                  src="https://www.billboard.com/wp-content/uploads/2023/07/Olivia-Rodrigo-press-credit-Larissa-Hofmann-2023-billboard-1548.jpg?w=942&h=623&crop=1"
                  alt=""
                />
                <span>photo_2024</span>
              </div>
              <img src="./download.png" alt="" className="icon-down"/>
            </div>
          </div>
          <div className="photos">
            <div className="PhotoItem">
              <div className="photodetail">
                <img
                  src="https://www.billboard.com/wp-content/uploads/2023/07/Olivia-Rodrigo-press-credit-Larissa-Hofmann-2023-billboard-1548.jpg?w=942&h=623&crop=1"
                  alt=""
                />
                <span>photo_2024</span>
              </div>
              <img src="./download.png" alt="" className="icon-down"/>
            </div>
          </div>
        </div>
        <div className="options">
          <div className="title">
            <span>chat Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Bolck User</button>
      </div>
    </div>
  );
};

export default Detail;
