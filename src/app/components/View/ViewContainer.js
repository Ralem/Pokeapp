import React from "react";

import View from "./View";
import { TweenMax, Power3 } from "gsap";

class ViewContainer extends React.Component {
    viewRef = React.createRef();
    componentWillAppear(){
        console.log("Hello");
    }
    componentWillEnter(cb){
        TweenMax.set(".ViewSwitch", {
            overflow: "hidden"
        });
        TweenMax.fromTo(this.viewRef.current, 0.3, {
            position: "absolute",
            xPercent: 100,
        }, {
            xPercent: 0,
            ease: Power3.easeInOut,
            onComplete: () => {
                TweenMax.set(this.viewRef.current, {
                    position: "relative",
                    onComplete: cb,
                });
                TweenMax.set(".ViewSwitch", {
                    overflow: "auto"
                });
            }
        });
    }
    componentWillLeave(cb){
        TweenMax.fromTo(this.viewRef.current, 0.3, {
            position: "absolute",
        }, {
            ease: Power3.easeInOut,
            xPercent: -100,
            onComplete() {
                cb();
            }
        })
    }
    render() {
        return (
            <View
                {...this.props}
                ref={this.viewRef}
            />
        );
    }
};

export default ViewContainer;
