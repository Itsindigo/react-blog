import _ from 'lodash';
import React, { Component } from 'react';
import BlogInstance from './blog_instance';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../actions/index';

class BlogIndex extends Component {
    componentDidMount() {
        this.props.fetchBlogs();
    }

    renderBlogs() {
        return _.map(this.props.blogs, blog => {
            return (
                <li className='list-group-item' key={blog.id}>
                    {blog.title}
                </li>
            );
        });
    }
    
    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary' to='/blog/new'>
                        New Blog
                    </Link>
                </div>
                <ul className='list-group'>
                    {this.renderBlogs()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { blogs: state.blogs };
}

export default connect(mapStateToProps, {fetchBlogs})(BlogIndex);