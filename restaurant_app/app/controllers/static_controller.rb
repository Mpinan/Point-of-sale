class StaticController < ApplicationController
    def home
        render json: {status: "is working"}
    end
end