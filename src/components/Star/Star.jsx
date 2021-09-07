import React from "react";

function Star(props){

    let StarStyle = ['','#328863'];
    let styles = [
        {fill:"none",stroke:'#328863'},
        {fill:"#328863",stroke:'none'},
    ];
    let size = props.size ? props.size : 20;
    return <>
        <svg width={size} height={size} viewBox="0 0 20 20" fill={styles[props.fill].fill} stroke={styles[props.fill].stroke} xmlns="http://www.w3.org/2000/svg">
            <path d="M20 7.85447C20 7.55797 19.7757 7.3737 19.3268 7.3015L13.2933 6.42425L10.589 0.955388C10.4369 0.62685 10.2404 0.462666 10.0001 0.462666C9.75976 0.462666 9.56342 0.62685 9.41115 0.955388L6.70673 6.42425L0.672988 7.3015C0.224386 7.3737 0 7.55797 0 7.85447C0 8.02282 0.100195 8.21513 0.300542 8.43147L4.6756 12.6863L3.64195 18.6958C3.62591 18.8081 3.61796 18.8884 3.61796 18.9363C3.61796 19.1046 3.65997 19.2467 3.74408 19.363C3.82815 19.4795 3.95428 19.5374 4.12263 19.5374C4.26695 19.5374 4.42713 19.4895 4.6034 19.3933L9.99994 16.5564L15.3969 19.3933C15.5654 19.4895 15.7256 19.5374 15.8774 19.5374C16.0382 19.5374 16.1601 19.4795 16.2443 19.363C16.3281 19.2469 16.3702 19.1046 16.3702 18.9363C16.3702 18.8323 16.3661 18.7522 16.3581 18.6958L15.3244 12.6863L19.6873 8.43147C19.896 8.22312 20 8.03073 20 7.85447Z" />
        </svg>

    </>

}

export default Star;