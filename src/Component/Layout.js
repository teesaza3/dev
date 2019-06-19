
import React,{ Component } from "react";
import 'antd/dist/antd.css';
import '../cssWeb/index.css';
import { Layout } from 'antd';
import tee from '../cssWeb/tee.jpg';

const { Header, Footer, Sider, Content } = Layout;

class Layout1 extends React.Component{
    render(){
        return(
				<div>
          		    <Header>
                        <nav className="nav-bar">
                            <div style={{ marginLeft: 40, fontSize: 50,textAlign: 'center'  }}>
                            My-Website
                        </div>
                        </nav>
                    </Header>
                    <Content style={{ textAlign: 'center'}}>
                    <div >
                        <h1>| Gomin Pawantao |</h1>
                    </div>
                    <div><img src={tee} class="picture-me" alt="profile"/></div>
                    <div class="head-section"><h1>Infomation</h1></div>
                    <hr class="line-end-content"></hr>
                    <div class="div-font-contents content-aboutme" >
                    <p><span class="bold-text">Name : </span>Gomin Pawantao</p>
					<p><span class="bold-text">age : </span>19</p>
					<p><span class="bold-text">Brithday : </span>22 December 1999</p>
					<p><span class="bold-text">Education : </span>Kasetsart University</p>
					<p><span class="bold-text">Email : </span>Gomin.p@ku.th</p>
					<p><span class="bold-text">Tel : </span>095-8654531</p>
				</div>
				<hr class="line-end-content"></hr>
                <div class="head-section"><h1>Skills</h1></div>
                <div class="grid-container-skills">
				<div class="grid-1-skill">
						<h3 class="topic-content">Programming</h3>
				</div>

				<div class="grid-2-skill">
						<h3 class="topic-content">Language</h3>
						
				</div>
			    </div>
                
                    </Content>
				</div>

        );
    }
}
export default Layout1;