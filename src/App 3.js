html, body {
    padding: 0; margin: 0;
    background-color: #727070;
}

.header {
    background-color: #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
}

.links {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.link {
    margin-left: 15px;
}

.profile {
    margin-left: 40px;
}

.link:hover {
    cursor: pointer;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.cardHolder {
    width: 50%;
    height: 50%;
    background-color: #fff;
    border-radius: 10px;
}

span {
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
}

input:invalid ~ span {
    display: block;
}