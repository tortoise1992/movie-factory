import React, { Component } from 'react';
import { Layout, Menu, Card,List,Icon,Row,Col,Button,Tooltip,Modal,message} from 'antd';
import request from '../service/api'
const { Header, Content, Footer } = Layout;


export default class App extends Component{
    state = {
        loading: false,
        visible: false,
        movies:[]
    }
    componentWillMount(){
        request('http://localhost:3002/api/test').then(data=>{
            console.log(data)
        })
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    handleAddFavorite(){
        message.success('成功添加到我的收藏');
    }
    render(){
        const { visible, loading,movies } = this.state;
        
          const data2 = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
          ];
        return(
            <Layout className="layout">
                <Header>
                    <div style={{ color: '#fff',float:'left'}}>
                        欢迎来到ahuife在线电影播放系统                        
                    </div>
                    
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px',float:'right' }}
                    >
                        <Menu.Item key="1">播放大厅</Menu.Item>
                        <Menu.Item key="2">我的收藏</Menu.Item>
                        <Menu.Item key="3">关于我</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                
                <div style={{ background: '#fff', padding: 24, minHeight: 280,margin:"10px 0" }}>
                    <Row>
                        <Col span={18}>
                            <List
                                grid={{ gutter: 16, column: 4 }}
                                dataSource={movies}
                                renderItem={item => (
                                <List.Item>
                                    <Card
                                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                    actions={[<Button  onClick={this.showModal} size="small" type="primary" icon="play-circle">立即播放</Button>
                                    ,<Button onClick={this.handleAddFavorite.bind(this)}  size="small" type="primary" icon="heart">加入收藏</Button>]}
                                    >
                                    <Tooltip placement="topLeft" title={item.content}>
                                        {item.title}
                                    </Tooltip>
                                    
                                   </Card>
                                </List.Item>
                                )}
                            />

                            <div>                               
                                <Modal
                                visible={visible}
                                title="播放器"
                                onCancel={this.handleCancel}    
                                footer={null}                            
                                >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                </Modal>
                            </div>
                        </Col>
                        <Col span={6} style={{padding:"0 20px"}}>
                        <List
                            header={<div>最近播放</div>}                            
                            bordered
                            dataSource={data2}
                            renderItem={item => (<List.Item>{item}</List.Item>)}
                        />
                        </Col>
                    </Row>
                    
                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                
                </Footer>
            </Layout>
        )
    }
}