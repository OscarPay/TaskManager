class Tasks::TriggerEvent

  def call(task, event)
    # policies
    # validations
    # call to other servicies

    task.send "#{event}!"

    [true, 'successful']
  rescue => e
    Rails.logger.error e
    [false, 'failed']
  end

end