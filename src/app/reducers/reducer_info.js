import { INFO_CURRENT_SET } from "actions/actions_info";

const initlState = {
    current: null
};

export default function (state = initlState, { type, payload }) {
    switch (type) {
        case INFO_CURRENT_SET:
            return { ...state, current: payload };
    }
    return state;
}
