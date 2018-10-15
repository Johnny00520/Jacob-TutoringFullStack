import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResourceDetail extends Component {
    render() {
        // We need to this if statement to check because when the app boots up,
        // the initial state was null (null is falsey)
        if (!this.props.resourcesListDetail) {
            return <div className="beforeStart"> Select a tab on left to get started </div>
        }

        return (
            <div>
                <h3>Detail for: </h3>
                <div className="resourcesListDetail">{this.props.resourcesListDetail.description}</div>
                <hr/>

                {this.props.resourcesListDetail.catagories.map((catagory, catagoryIndex) => {
                    return (
                        <ul key={catagoryIndex}>
                            <div className="catagory-subtitle">
                                <b><u>{catagory.subtitle}</u></b>
                            </div>
                            {catagory.catagoriesLists.map((catagoriesList, item) => {
                                if (catagoriesList.bookAuthors) {
                                    return (
                                        <li key={item} className="catagoriesDescription">
                                            {catagoriesList.catagoriesDescription}

                                            <ul>
                                                {catagoriesList.bookAuthors.map((bookAuthor, bookIndex) => {
                                                    return (
                                                        <li key={bookIndex} className="bookAuthor">
                                                            {bookAuthor.bookNauthor}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                    );
                                }

                                return (
                                    <li key={item} className="catagoriesDescription">
                                        {catagoriesList.catagoriesDescription}
                                        <p>
                                            <a href={catagoriesList.url} alt="">{catagoriesList.url}</a>
                                        </p>
                                        {/* {catagoriesList.url} */}
                                    </li>
                                );
                            })}
                        </ul>
                    )
                })}

            </div>
        );
    }
}

// Usually this return an object in here
const mapStateToProps = (stateFromResoucre) => ({
    // activeResource is referring to the index.js under the reducers folder
    resourcesListDetail: stateFromResoucre.ResourcesType
})

// render index.js under reducers folder and pass into ResourceDetail(currenct component),
export default connect(mapStateToProps)(ResourceDetail)