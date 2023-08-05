class RecordsController < ApplicationController
  def index
    @records = Record.all
  end

  def show
    @record = Record.find_by(id: params[:id])
  end
end
