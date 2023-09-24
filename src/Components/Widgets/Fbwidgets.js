function Fbwidgets() {

    return (
		<div className="widget fb_pagediv">
			<div id="fb-root"></div>
			<div className="fb-page" data-href="https://www.facebook.com/morbiupdate" data-tabs="timeline" data-width="" data-height="120" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
			<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="vJrVVPqK"></script>
		</div>
    );
}

export default Fbwidgets;