/**
 * @desc Changes the active state of a service page. This determines wich service page gets rendered.
 *
 * @param {string} id of service page
 */
export function setActive(index) {
	return {
		type: 'SERVICE_SELECTED',
		index
	}
}
